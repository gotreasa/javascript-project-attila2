import express from 'express';
import helmet from 'helmet';
import { readFileSync } from 'node:fs';

import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';

const file = readFileSync('./openapi.yaml', 'utf8');
const openApiSpecification = YAML.parse(file);

const app = express();
app.use(helmet());

app.use('/health', (_, response) => response.sendStatus(200));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpecification));
app.get('/api/v1/dummy', (_, response) => response.status(200).json({}));

export default app;
