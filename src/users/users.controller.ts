import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
@Controller()

export class userController {
    @Get('users')
    find() : String[] { 
       return  ["khaled","khled"]
    }
    @Post('users')
    Create(@Req() req: Request):string{
        console.log("bodduuuuu",req.body)        
        return 'Create new Users'
    }
    @Get('users/:username')
        findOne(@Param('username') username: string): string {
          return username;
        }
      
    @Patch('users')
    updateOne():string{
        return 'update one User'
    }
    @Delete('users')
    remove():string{
        return 'remove one User'
    }
}