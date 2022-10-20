import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async create(createNoteDto: CreateNoteDto) {
    return this.prisma.note.create({
      data: createNoteDto,
    });
  }

  async findAll() {
    return this.prisma.note.findMany();
  }

  async findOne(id: string) {
    return this.prisma.note.findUnique({
      where: {
        id,
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.note.findFirst({
      where: {
        userId,
      },
    });
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    return this.prisma.note.update({
      where: { id },
      data: updateNoteDto,
    });
  }

  async remove(id: string) {
    await this.prisma.note.delete({
      where: {
        id,
      },
    });
  }
}
