# API Authentication Based On Packet Data Sent (HMAC SHA512)

The main motivation for creating this package is to have a lot more flexibility and security for API based communication. I have used JWT in the past and found it to be scarily easy to hack!

I have followed the principles outlined and implemented at Twitter.

This is an Angular client plugin used to generate a hash to send to the server side.

To implement a Laravel server to consume requests from this plugin please see:
[Laravel HMAC Packet Auth](https://github.com/linkthrow/laravel-hmac-packet-auth "Laravel HMAC Packet Auth")

Dependancies
------------

[Angular Local Storage](https://github.com/grevory/angular-local-storage "Angular Local Storage")

Install
-------

    npm install angular-hmac-packet-auth
    bower install angular-hmac-packet-auth

Usage
------

    Please include 'linkthrow.hmacPacketAuth' as a module dependancy. This will create a universal interceptor everytime an API request is made.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Hussan Choudhry**

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
