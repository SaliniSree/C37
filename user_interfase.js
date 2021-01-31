class user_interfase{
    constructor(){
        this.input= createInput("name")
        this.input.position(500,250)

        this.button = createButton("GO")
        this.button.position(700,300)


        this.Welcome_pls = createElement("H2")
    }


    hide(){                              //added
        this.input.hide()
        this.button.hide()
        this.Welcome_pls.hide()
    }
    display(){
        var title=createElement("H1")
        title.html('The Car Racing Game')
        title.style('color','red')
        title.position(480,150)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            Players=Players+1
            player.Intex=Players   //made player.Intex,there was case error
            player.updateName()
            player.updateNo_(Players)
           
            this.Welcome_pls.html("Hi   "+player.name + " !")
            this.Welcome_pls.position(600,300)
            this.Welcome_pls.style('color','red')
        })


    }

   
}