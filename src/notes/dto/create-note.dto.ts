import { IsString, IsUUID } from 'class-validator';

export class CreateNoteDto {
  @IsUUID()
  userId: string;

  @IsString()
  title: string;

  @IsString()
  content: string;
}
