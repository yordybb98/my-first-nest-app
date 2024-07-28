import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [TasksModule, AuthModule, UsersModule, ProjectsModule, HelloModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
