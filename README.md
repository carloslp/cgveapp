# cgveapp

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/carloslp/cgveapp)

## Deployment

### Caprover Deployment

This application is ready to be deployed on Caprover. The repository includes:

- `Dockerfile`: Multi-stage build configuration using Node.js and Nginx
- `captain-definition`: Caprover configuration file
- `.dockerignore`: Optimizes Docker build by excluding unnecessary files

#### To deploy on Caprover:

1. Install Caprover CLI: `npm install -g caprover`
2. Login to your Caprover instance: `caprover login`
3. Deploy the app: `caprover deploy`

The application will be built and deployed automatically.

### Docker Deployment

You can also run the application locally using Docker:

```bash
# Build the image
docker build -t cgveapp .

# Run the container
docker run -d -p 80:80 cgveapp
```

The application will be available at http://localhost

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```