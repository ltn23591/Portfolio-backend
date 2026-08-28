import { Injectable, Logger } from '@nestjs/common';
import { CreateContactDto } from '../types/contact.dto';
import { PrismaService } from '../db/prisma.service';
import { PortfolioGateway } from '../gateways/portfolio.gateway';

@Injectable()
export class ContactService {
    private readonly logger = new Logger(ContactService.name);

    constructor(
        private readonly prisma: PrismaService,
        private readonly portfolioGateway: PortfolioGateway
    ) {}

    async handleContactMessage(createContactDto: CreateContactDto) {
        this.logger.log(`Saving contact message received from: ${createContactDto.name} <${createContactDto.email}>`);
        
        const savedContact = await this.prisma.contact.create({
            data: createContactDto
        });

        // Broadcast realtime notification via WebSocket
        this.portfolioGateway.broadcastNewMessage(savedContact);

        return {
            success: true,
            message: 'Your message has been processed successfully.',
            timestamp: savedContact.timestamp.toISOString()
        };
    }

    async getAllMessages() {
        return this.prisma.contact.findMany();
    }
}
