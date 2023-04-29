# testing_openai_api mono repo for python and js implementations

## testing_openai_api_js
---
- prerequisites
  - node
  - npm
- main file
  - main.mjs
- running the project
  - replace "YOUR_API_KEY" in .env file with your own real api key.
  - ```console
    $ npm i
    $ npm run start
    ```
## testing_openai_api_py
---
- prerequisites
  - python 3 (only tested on python >=v.3, will possibly work on older versions as well)
  - pip
- main file
  - main.py
- running the project
  - replace "YOUR_API_KEY" in .env file with your own real api key.
  - Here the dependencies are installed for the local user, if you want to install it globally on your system, I.E all users, simply remove the " -u " flag.
  - ```console
    $ pip install -u python-dotenv
    $ pip install -u openai
    $ python main.py
    ```
