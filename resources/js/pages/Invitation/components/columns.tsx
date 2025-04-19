'use client';

import { Button } from '@/components/ui/button';
import { InvitationColumn } from '@/types/invitation-columns';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { ArrowUpDown, Check, X } from 'lucide-react';
import { CellAction } from './cell-action';

export const columns: ColumnDef<InvitationColumn>[] = [
    {
        accessorKey: 'number',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="font-bold text-slate-800 dark:text-slate-50"
                >
                    Num.
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: 'grooms_name',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="font-bold text-slate-800 dark:text-slate-50"
                >
                    Groom
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'brides_name',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="font-bold text-slate-800 dark:text-slate-50"
                >
                    Bride
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'event_date',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="font-bold text-slate-800 dark:text-slate-50"
                >
                    Event Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const rawDate = row.getValue('event_date') as string;

            try {
                const formattedDate = format(new Date(rawDate), 'd MMMM yyyy', { locale: id });
                return <span>{formattedDate}</span>;
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                return <span>-</span>;
            }
        },
    },
    {
        accessorKey: 'theme',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="font-bold text-slate-800 dark:text-slate-50"
                >
                    Theme
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'is_active',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="font-bold text-slate-800 dark:text-slate-50"
                >
                    Active
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const isActive = row.getValue('is_active') as boolean;

            return (
                <Button
                    variant="outline"
                    className={`flex h-8 w-8 items-center justify-center rounded-full p-0 ${
                        isActive ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    }`}
                    disabled
                >
                    {isActive ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </Button>
            );
        },
    },
    {
        id: 'actions',
        header: () => {
            return <span className="font-bold text-slate-800 dark:text-slate-50">Actions</span>;
        },
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
