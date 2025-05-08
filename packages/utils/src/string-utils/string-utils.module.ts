import { DynamicModule, Module } from "@nestjs/common";
import { StringUtilsService } from "./string-utils.service";
import { STRING_UTILS_SERVICE_TOKEN } from "src/constants";

@Module({})
export class StringUtilsModule {
  static register(separator: string): DynamicModule {
    return {
      module: StringUtilsModule,
      providers: [
        {
          provide: StringUtilsService,
          useValue: StringUtilsService,
        },
        {
          provide: STRING_UTILS_SERVICE_TOKEN,
          useValue: separator,
        },
      ],
      exports: [StringUtilsService],
    };
  }
}
