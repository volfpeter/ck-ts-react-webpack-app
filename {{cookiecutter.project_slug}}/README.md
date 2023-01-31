# {{ cookiecutter.app_name }}

{{ cookiecutter.description }}

## Getting started

- Install dependencies with `npm install`.
- Create a self-signed certificate for the dev server to serve the project locally using `npm run create-cert`.
- Start the project with `npm run start`. 

## Application framework

-   Rendering engine: `react`
-   Translation: `react-i18next`

## Development and testing

-   Dev server and bundler: `webpack`, `webpack-cli`, `webpack-dev-server`, `webpack-merge`.
-   Testing and coverage: `chai`, `mocha`, and `c8`.

## License
{% if cookiecutter.license == 'Proprietary' %}
(c) Copyright {% now 'local', '%Y' %} {{ cookiecutter.author }} ({{ cookiecutter.email }}), all rights reserved.
{% else %}
This project is open-sourced under the conditions of the {{ cookiecutter.license }} license.
{% endif %}
