import { Injectable } from '@nestjs/common';
import { GCPubSubClient } from 'nestjs-google-pubsub-microservice';

@Injectable()
export class PubSubClientService extends GCPubSubClient {}
