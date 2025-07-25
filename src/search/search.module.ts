import { Module } from "@nestjs/common";
import {GetSearchServersController} from './controllers/getSearchServers'

@Module({
    controllers: [GetSearchServersController]
})
export class SearchModule {}