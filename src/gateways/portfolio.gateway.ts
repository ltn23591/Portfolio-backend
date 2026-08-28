import { 
    WebSocketGateway, 
    WebSocketServer, 
    OnGatewayConnection, 
    OnGatewayDisconnect 
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class PortfolioGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    private readonly logger = new Logger(PortfolioGateway.name);
    private activeVisitors = new Set<string>();

    handleConnection(client: Socket) {
        this.activeVisitors.add(client.id);
        this.logger.log(`Client connected: ${client.id}. Total active: ${this.activeVisitors.size}`);
        this.broadcastVisitorCount();
    }

    handleDisconnect(client: Socket) {
        this.activeVisitors.delete(client.id);
        this.logger.log(`Client disconnected: ${client.id}. Total active: ${this.activeVisitors.size}`);
        this.broadcastVisitorCount();
    }

    private broadcastVisitorCount() {
        this.server.emit('visitor_count', { count: this.activeVisitors.size });
    }

    // Broadcasts realtime notification when a new contact message is received
    broadcastNewMessage(message: any) {
        this.logger.log('Broadcasting new contact message event to clients');
        this.server.emit('new_contact_message', message);
    }
}
