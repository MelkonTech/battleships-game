import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const merge = (...className: ClassValue[]) => twMerge(clsx(className));

export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);
