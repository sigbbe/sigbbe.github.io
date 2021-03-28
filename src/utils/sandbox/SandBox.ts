
export type DescribedFoo1 = {
    description: string;
    (someArg: number): boolean;
};

export type DescribedFoo2 = {
    description: string;
    fn: (someArg: number) => boolean;
};
