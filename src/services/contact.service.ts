import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from '../types/contact.dto';
import { Contact } from '../db/entities/contact.entity';

@Injectable()
export class ContactService {
    private readonly logger = new Logger(ContactService.name);

    constructor(
        @InjectRepository(Contact)
        private readonly contactRepository: Repository<Contact>
    ) {}

    async handleContactMessage(createContactDto: CreateContactDto) {
        this.logger.log(`Saving contact message received from: ${createContactDto.name} <${createContactDto.email}>`);
        
        const newContact = this.contactRepository.create(createContactDto);
        const savedContact = await this.contactRepository.save(newContact);

        return {
            success: true,
            message: 'Your message has been processed successfully.',
            timestamp: savedContact.timestamp.toISOString()
        };
    }

    async getAllMessages() {
        return this.contactRepository.find();
    }
}
