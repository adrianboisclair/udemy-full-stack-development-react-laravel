# Full Stack Development with React and Laravel
## Setup and Launch Instructions

* Install Composer

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '669656bab3166a7aff8a7506b8cb2d1c292f042046c5a994c43155c0be6190fa0355160742ab2e1c88d40d5be660b410') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

* Install Laravel
```
composer global require "laravel/installer"
```

For more information on Laravel see the Laravel documentation https://laravel.com/docs/5.5/installation

* Clone Project
```
git clone https://github.com/adrianboisclair/udemy-full-stack-development-react-laravel.git
```

 