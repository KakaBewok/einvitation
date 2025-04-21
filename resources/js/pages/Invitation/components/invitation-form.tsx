'use client';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/custom-heading';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useGlobalContext } from '@/hooks/use-global-context';
// import Category from '@/interfaces/Category';
// import Product from '@/interfaces/Product';
import urlToFile from '@/lib/file-utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';
import {
    ACCEPTED_IMAGE_TYPES,
    ACCEPTED_MUSIC_TYPES,
    ACCEPTED_VIDEO_TYPES,
    BASE_URL,
    MAX_IMAGE_SIZE,
    MAX_MUSIC_SIZE,
    MAX_VIDEO_SIZE,
} from '../../../constants';

// field yang akan diisi:

// host---
// host_one_name: string;
// host_two_name: string;
// host_one_nickname: string;
// host_two_nickname: string;
// host_one_additional_info: string;
// host_two_additional_info: string;
// host_one_social_media: string;
// host_two_social_media: string;
// phone_number?: string;

// event---
// event_title: string;
// event_date: string; // Format: 'YYYY-MM-DD' or ISO string
// event_type: string;
// location: string;
// greetings?: string;
// message?: string;

// relationships---
// theme?: Theme;
// music?: Music;

// images?: Image[];
// videos?: Video[];
// giftInfo?: GiftInfo[];
// rsvps?: Rsvp[];
// guests?: Guest[];
// stories?: Story[];
// rundowns?: Rundown[];

const MAX_FILE_SIZE = 1024 * 1024 * 2; // 2MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg'];

export const formSchema = z.object({
    // HOST FIELDS
    host_one_name: z.string().min(1, { message: 'Host one name is required' }),
    host_two_name: z.string().min(1, { message: 'Host two name is required' }),
    host_one_nickname: z.string().min(1, { message: 'Host one nickname is required' }),
    host_two_nickname: z.string().min(1, { message: 'Host two nickname is required' }),
    host_one_additional_info: z.string().optional(),
    host_two_additional_info: z.string().optional(),
    host_one_social_media: z.string().optional(),
    host_two_social_media: z.string().optional(),
    phone_number: z.string().optional(),

    // EVENT FIELDS
    event_title: z.string().min(1, { message: 'Event title is required' }),
    event_date: z.string().min(1, { message: 'Event date is required' }),
    event_type: z.string().min(1, { message: 'Event type is required' }),
    location: z.string().min(1, { message: 'Location is required' }),
    greetings: z.string().optional(),
    message: z.string().optional(),

    // ETC FIELDS
    slug: z.string().min(1, { message: 'Slug is required' }),
    is_active: z.boolean().optional(),
    activated_at: z.string().optional(),
    expired_at: z.string().optional(),

    // RELATIONSHIPS
    theme: z.any().optional(), // Update with z.object({}) if you know the structure
    music: z.any().optional(),

    // FILE ARRAYS
    images: z
        .array(
            z.union([
                z
                    .instanceof(File)
                    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
                        message: 'Image must be in jpg, jpeg, png, or webp format',
                    })
                    .refine((file) => file.size <= MAX_FILE_SIZE, {
                        message: `Image size must not exceed ${MAX_FILE_SIZE / 1024 / 1024}MB`,
                    }),
                z.string(), // To allow existing URLs on edit
            ]),
        )
        .optional(),

    videos: z
        .array(
            z.union([
                z
                    .instanceof(File)
                    .refine((file) => ACCEPTED_VIDEO_TYPES.includes(file.type), {
                        message: 'Video must be in mp4, webm, or ogg format',
                    })
                    .refine((file) => file.size <= MAX_FILE_SIZE * 5, {
                        message: 'Video size is too large',
                    }),
                z.string(),
            ]),
        )
        .optional(),

    // DATA ARRAY RELATIONSHIPS
    giftInfo: z.any().optional(),
    rsvps: z.any().optional(),
    guests: z.any().optional(),
    stories: z.any().optional(),
    rundowns: z.any().optional(),
});

const formSchema = z.object({
    name: z.string().min(3, { message: 'Name must contain at least 3 character(s)' }),
    price: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0' }),
    category_id: z.string().min(1, { message: 'Category is required' }),
    description: z.string().optional(),
    unit: z.string().min(1, { message: 'Unit is required' }),
    stock_quantity: z.coerce.number().min(0, { message: 'Stock must be greater than or equal to 0' }),
    photos: z
        .array(
            z.union([
                z
                    .instanceof(File)
                    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
                        message: ' must be jpg, jpeg, png or webp formats',
                    })
                    .refine((file) => file.size <= MAX_FILE_SIZE * 1024, {
                        message: ` is more than ${MAX_FILE_SIZE}KB`,
                    }),
                z.string(),
            ]),
        )
        .optional(),
});

type InvitationFormValues = z.infer<typeof formSchema>;

interface InvitationFormProps {
    initialData?:
        | (Product & {
              photos: string[];
          })
        | null;
    categories: Category[];
}

export const InvitationForm: React.FC<InvitationFormProps> = ({ initialData, categories }) => {
    console.log('ACCEPTED_IMAGE_TYPES:', ACCEPTED_IMAGE_TYPES);
    console.log('ACCEPTED_VIDEO_TYPES:', ACCEPTED_VIDEO_TYPES);
    console.log('ACCEPTED_MUSIC_TYPES:', ACCEPTED_MUSIC_TYPES);
    console.log('BASE_URL:', BASE_URL);
    console.log('MAX_IMAGE_SIZE:', MAX_IMAGE_SIZE);
    console.log('MAX_VIDEO_SIZE:', MAX_VIDEO_SIZE);
    console.log('MAX_MUSIC_SIZE:', MAX_MUSIC_SIZE);

    const [photoFiles, setPhotoFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { loading, setLoading } = useGlobalContext();
    const [isCreateAnother, setIsCreateAnother] = useState<boolean>(false);

    const title = initialData ? 'Edit product' : 'Create product';
    const description = initialData ? 'Edit a product' : 'Add a new product';
    const toastMessage = initialData ? 'Product updated.' : 'Product created.';
    const action = initialData ? 'Save changes' : 'Create';

    const form = useForm<InvitationFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: initialData?.name || '',
            price: initialData?.price || 0,
            category_id: initialData?.category_id || '',
            description: initialData?.description || '',
            unit: initialData?.unit || '',
            stock_quantity: initialData?.stock_quantity || 0,
            photos: initialData?.photos,
        },
    });

    useEffect(() => {
        const convertUrlsToFiles = async () => {
            if (initialData && initialData.photos.length > 0) {
                const files = await Promise.all(
                    initialData.photos.map((photoUrl, index) => {
                        const filePath = `${BASE_URL}/storage/${photoUrl}`;
                        return urlToFile(filePath, `product-image-${index}.jpg`, 'image/jpeg');
                    }),
                );

                setPhotoFiles(files);

                const dt = new DataTransfer();
                files.forEach((file) => dt.items.add(file));
                if (fileInputRef.current) {
                    fileInputRef.current.files = dt.files;
                }
                form.setValue('photos', files);
            }
        };

        convertUrlsToFiles();
    }, [initialData, form]);

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setPhotoFiles([...photoFiles, ...files]);
            form.setValue('photos', [...photoFiles, ...files]);
        }
    };

    const removePhotoFile = (index: number) => {
        const updatedPhotoFiles = photoFiles.filter((_, i) => i !== index);
        setPhotoFiles(updatedPhotoFiles);

        const dt = new DataTransfer();
        updatedPhotoFiles.forEach((file) => dt.items.add(file));
        if (fileInputRef.current) {
            fileInputRef.current.files = dt.files;
        }
        form.setValue('photos', updatedPhotoFiles);
    };

    const onSubmit = (data: InvitationFormValues) => {
        setLoading(true);

        const clearForm = () => {
            form.reset();
            setPhotoFiles([]);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        };

        const handleSuccess = () => {
            clearForm();

            isCreateAnother ? router.visit(route('admin.product.create')) : router.visit(route('admin.product.index'));

            setTimeout(() => {
                toast.success(toastMessage, {
                    position: 'top-center',
                });
            }, 1000);
        };

        const handleError = (error: any) => {
            console.log('An error occurred: ', error);
        };

        const handleFinish = () => setLoading(false);

        initialData
            ? router.post(
                  route('admin.product.update', initialData?.id),
                  {
                      ...data,
                      _method: 'PATCH',
                  },
                  {
                      onSuccess: handleSuccess,
                      onError: handleError,
                      onFinish: handleFinish,
                  },
              )
            : router.post(route('admin.product.store'), data, {
                  onSuccess: handleSuccess,
                  onError: handleError,
                  onFinish: handleFinish,
              });
    };

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={title} description={description} />
                <Button variant="outline" onClick={() => window.history.back()} className="dark:bg-slate-200 dark:text-slate-900">
                    Back
                </Button>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-8 rounded-md bg-slate-50 p-8 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 md:dark:bg-gradient-to-br"
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                        {/* name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormLabel className={fieldState.error ? 'text-red-500' : 'dark:text-gray-300'}>
                                        Name <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="dark:bg-slate-700" disabled={loading} placeholder="Arabica coffe beans" {...field} />
                                    </FormControl>
                                    <FormMessage className="dark:text-red-500" />
                                </FormItem>
                            )}
                        />
                        {/* price */}
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormLabel className={fieldState.error ? 'text-red-500' : 'dark:text-gray-300'}>
                                        Price
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="dark:bg-slate-700" type="number" disabled={loading} {...field} />
                                    </FormControl>
                                    <FormMessage className="dark:text-red-500" />
                                </FormItem>
                            )}
                        />
                        {/* category */}
                        <FormField
                            control={form.control}
                            name="category_id"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormLabel className={fieldState.error ? 'text-red-500' : 'dark:text-gray-300'}>
                                        Category <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <Select
                                        disabled={loading}
                                        onValueChange={field.onChange}
                                        value={field.value.toString()}
                                        defaultValue={field.value.toString()}
                                    >
                                        <FormControl className="dark:bg-slate-700">
                                            <SelectTrigger className="w-full">
                                                <SelectValue defaultValue={field.value.toString()} placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category.id.toString()} value={category.id.toString()}>
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="dark:text-red-500" />
                                </FormItem>
                            )}
                        />
                        {/* unit */}
                        <FormField
                            control={form.control}
                            name="unit"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormLabel className={fieldState.error ? 'text-red-500' : 'dark:text-gray-300'}>
                                        Unit <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Select disabled={loading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                            <FormControl className="dark:bg-slate-700">
                                                <SelectTrigger className="w-full">
                                                    <SelectValue defaultValue={field.value} placeholder="Select a unit" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Gram">Gram</SelectItem>
                                                <SelectItem value="Kilogram">Kilogram</SelectItem>
                                                <SelectItem value="Pcs">Pcs</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage className="dark:text-red-500" />
                                </FormItem>
                            )}
                        />
                        {/* stock_quantity */}
                        <FormField
                            control={form.control}
                            name="stock_quantity"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormLabel className={fieldState.error ? 'text-red-500' : 'dark:text-gray-300'}>
                                        Stock
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="dark:bg-slate-700" type="number" disabled={loading} {...field} />
                                    </FormControl>
                                    <FormMessage className="dark:text-red-500" />
                                </FormItem>
                            )}
                        />
                        {/* description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormLabel className={fieldState.error ? 'text-red-500' : 'dark:text-gray-300'}>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="h-32 max-h-40 w-full max-w-lg dark:bg-slate-700"
                                            disabled={loading}
                                            placeholder="Description of Arabica coffe beans like size, color etc."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="dark:text-red-500" />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* images */}
                    <div className="flex flex-col gap-8">
                        <FormField
                            control={form.control}
                            name="photos"
                            render={({ fieldState }) => (
                                <FormItem>
                                    <FormLabel className={fieldState.error ? 'text-red-500' : 'dark:text-gray-300'}>Product Images</FormLabel>
                                    <FormDescription>
                                        Upload each image up to {MAX_FILE_SIZE}
                                        KB (jpg, jpeg, png, webp only).
                                    </FormDescription>
                                    <FormControl>
                                        <Input
                                            className="w-full md:w-[48%] dark:bg-slate-700"
                                            ref={fileInputRef}
                                            type="file"
                                            multiple
                                            accept="image/jpeg, image/png, image/jpg, image/webp"
                                            onChange={handlePhotoChange}
                                        />
                                    </FormControl>
                                    {fieldState.error && (
                                        <ul className="flex flex-col gap-6 py-2 text-sm text-red-500 md:gap-3">
                                            {(Array.isArray(fieldState.error) ? fieldState.error : [fieldState.error]).map((error, index) => (
                                                <li key={index}>{`- Image number ${index + 1} ${error?.message || 'Unknown error'}`}</li>
                                            ))}
                                        </ul>
                                    )}
                                </FormItem>
                            )}
                        />

                        {/* Preview Images */}
                        <div className="flex flex-wrap items-center justify-center gap-8 md:justify-start">
                            {photoFiles.map((file, index) => (
                                <div
                                    key={index}
                                    className="relative h-52 w-52 overflow-hidden rounded-md border border-slate-300 shadow-md dark:border-gray-200"
                                >
                                    <img
                                        key={index}
                                        src={URL.createObjectURL(file)}
                                        alt={`Uploaded ${index}`}
                                        className="h-full w-full object-cover"
                                    />
                                    <button
                                        className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white"
                                        type="button"
                                        onClick={() => removePhotoFile(index)}
                                    >
                                        <span className="text-xs leading-none">✕</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* submit button */}
                    <div className="mt-10 flex w-full flex-col items-center justify-between gap-4 md:w-1/2 lg:flex-row">
                        <Button disabled={loading} className="w-full" type="submit" onClick={() => setIsCreateAnother(false)}>
                            {action}
                        </Button>
                        <Button
                            disabled={loading}
                            className={`${
                                initialData ? 'hidden' : ''
                            } w-full bg-slate-300 text-slate-950 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200`}
                            type="submit"
                            onClick={() => setIsCreateAnother(true)}
                        >
                            Create & Create another
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};
