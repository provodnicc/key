import { ApiProperty } from "@nestjs/swagger"

export class SignUpDto
{
    @ApiProperty({default: 'default@email.com'})
    email: string
    @ApiProperty({default: 'default'})
    password: string
}