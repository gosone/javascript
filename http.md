## HTTP2
1. 多路复用：可以在一个tcp连接上发送多个请求，在一个tcp连接上有多个流，将要传输的数据分成多个二进制的帧单元，进行标记，还可以设置优先级，服务器端收到后将帧进行组合。
2. 二进制协议：
3. 头部压缩：使用HPACK规范作为一个简单又安全的方法来实现请求头压缩，客户端和服务端维护一个请求头列表。HPACK会在每个请求头发给服务器之前对其单独的值进行压缩，具体实现方法就是：在之前发送过的请求头列表中查找已编码的请求头信息，来重新组成整个请求头信息。
4. 服务器推送：允许服务器发送额外的信息给客户端，这些额外的信息客户端并没有请求但接下来很可能会用到。例如，如果客户端请求了资源X，而Y资源接下来很明显也会请求，服务器就可以选择把Y资源和X资源一起发给客户端，而不需等到客户端请求在发送。

## HTTP1.1
建立了长连接，但是可能会因为某个请求丢失等问题，出现队头阻塞的问题

## HTTPS
1. 客户端向服务端发送建立连接的请求
2. 服务端保存着一个公钥和一个私钥，向客户端发送ca证书，包括有效期等，还有公钥
3. 客户端收到ca证书后，向机构请求，验证ca证书的合法性，如果合法的话，就生成一个随机数，作为客户端密钥，通过公钥加密后发送给服务端
4. 服务端收到后，用私钥解密，得到客户端密钥，将数据用客户端密钥加密后发送给客户端。

## HTTP请求
### Get

* GET请求的数据会附加在URL之后，用问号分割，多个参数用&进行连接。
* GET请求的数据会暴露在地址栏中。
* GET请求URL的编码格式采用的是ASCII编码，而不是Unicode编码。
* GET请求传输大小有限制，大小在2KB。
* GET相对安全性较差，会被浏览器主动缓存。
* GET产生一个TCP数据包，head和data一起发送。
* GET浏览器回退无害。

### POST

* POST请求会把数据放置在HTTP请求包的包体中，不会直接暴露给用户。
* POST请求，理论上大小是不会限制的，但是实际上各个服务器会规定POST提交数据大小。
* POST相对Get更安全，因为参数不会保存浏览器立式或者是web服务器日志中。
* POST产生两个TCP数据包，header先发送，服务器响应100ms然后继续，发送data，服务器200然后返回数据。
* POST浏览器回退重新请求。