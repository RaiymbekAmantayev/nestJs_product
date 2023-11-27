import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start(){
    const PORT = parseInt(process.env.PORT, 10) || 8080;
    const app =await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle("lesson by restapi in nestjs")
        .setDescription("Documentation of restApi")
        .setVersion('1.0.0')
        .addTag("ULBI TV")
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () =>  console.log(`server running in port ${PORT}`))

}
start();