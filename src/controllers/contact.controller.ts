import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateContactDto } from '../types/contact.dto';
import { ContactService } from '../services/contact.service';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async receiveMessage(@Body() createContactDto: CreateContactDto) {
        return this.contactService.handleContactMessage(createContactDto);
    }

    @Get()
    async getMessages() {
        return this.contactService.getAllMessages();
    }
}
