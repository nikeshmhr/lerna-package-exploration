import { Inject, Injectable } from "@nestjs/common";
import { STRING_UTILS_SERVICE_TOKEN } from "src/constants";

@Injectable()
export class StringUtilsService {
  constructor(
    @Inject(STRING_UTILS_SERVICE_TOKEN) private readonly separator: string
  ) {}

  split(str: string, separator?: string): string[] {
    return str.split(separator ?? this.separator);
  }

  join(arr: string[], separator?: string): string {
    return arr.join(separator ?? this.separator);
  }
}
