function LazyMan(uname){
    class _lazyMan{
        constructor(uname){
            this.tasks=[];
            let fn=()=>{
                console.log("Hi! This is " + uname + "!");
                this.next();
            }
            this.tasks.push(fn);
            setTimeout(()=>{
                this.next();
            }, 0);
        }
        next(){
            let fn=this.tasks.shift();
            typeof fn=='function' && fn();
        }
    
        eat(something){
            let fn=()=>{
                console.log("Eat " + something + "~");
                this.next();
            }
            this.tasks.push(fn);
            return this;
        }
        sleep(time){
            let fn=()=>{
                setTimeout(()=>{
                    console.log("Wake up after " + time + "s!");
                    this.next();
                }, time * 1000);
            }
            this.tasks.push(fn);
            return this;
        }
        sleepFirst(time){
            let fn=()=>{
                setTimeout(()=>{
                    console.log("Wake up after " + time + "s!");
                    this.next();
                }, time * 1000);
            }
            this.tasks.unshift(fn);
            return this;
        }
    }
    return new _lazyMan(uname);
  }

  LazyMan('Hank').sleep(10).eat('dinner');
