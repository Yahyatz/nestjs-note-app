import {Controller, Get} from '@nestjs/common';
import {NoteService} from "./note.service";

@Controller('note')
export class NoteController {
    constructor(private noteservice: NoteService) {
    }
    @Get('all')
    getAll() {
        return this.noteservice.findAll();
    }

}
