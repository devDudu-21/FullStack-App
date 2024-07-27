import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
