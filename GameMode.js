class g_status{
    constructor(){

    }
    getStates(){
        var GameModeref=database.ref("GameMode")
        GameModeref.on("value",function(data){
            GameMode=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            GameMode:state
        })
    }
    START(){
        if(GameMode==0){
            player=new Player()
            player.getNo_()
            form=new user_interfase()
            form.display()
        }
    }
    play(){
        form.hide()

        fill(255)
        textSize(30);
        text("Game Start",100,200);  ///added
      

        Player.INFO_ALL()
        if(allplayers!=undefined){
            var Y = 300
            var X = 100+10
            for(var p in allplayers){    //added

                if(p == "player"+ player.Intex){
                    fill("red")
                  }
                  else{
                    fill("white")
                  }
                Y += 40
                text(allplayers[p].Name+" : "+allplayers[p].Distance,X,Y)
            }
            
           
        }
        if(keyWentDown("up_arrow")&&player.Intex!=null){
            player.Distance=player.Distance+10
            player.updateName()
        }
    }
}