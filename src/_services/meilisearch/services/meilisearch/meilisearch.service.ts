import { Injectable } from "@nestjs/common";
import { Meilisearch } from "meilisearch";

@Injectable()
export class MeilisearchService extends Meilisearch {}