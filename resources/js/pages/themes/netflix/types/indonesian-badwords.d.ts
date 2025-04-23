declare module 'indonesian-badwords' {
    interface AnalyzeResult {
        original: string;
        totalWords: number;
        censored: string;
        badwords: string[];
        badwordsCount: number;
        badwordsIndex: number[];
    }

    const badwords: {
        flag: (text: string) => boolean;
        badwords: (text: string) => string[];
        filter: (text: string) => string;
        censor: (text: string, replacement?: string) => string;
        analyze: (text: string) => AnalyzeResult;
    };

    export default badwords;
}
