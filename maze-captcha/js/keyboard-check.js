document.onclick=function(event)
{
    if(time1=='not start')
        time1=new Date();
    var temp=event.srcElement;
    // console.log(process,temp.type);
    if(temp.id=="button-left")
    {
        if(py>0&&maze[px][py-1]!=0)
            maze[px][py]=4,py=py-1,step=step-1;
        ShowMaze();
    }
    if(temp.id=="button-up")
    {
        if(px>0&&maze[px-1][py]!=0)
            maze[px][py]=4,px=px-1,step=step-1;
        ShowMaze();
    }
    if(temp.id=="button-down")
    {
        if(px<9&&maze[px+1][py]!=0)
            maze[px][py]=4,px=px+1,step=step-1;
        ShowMaze();
    }
    if(temp.id=="button-right")
    {
        if(py<9&&maze[px][py+1]!=0)
            maze[px][py]=4,py=py+1,step=step-1;
        ShowMaze();
    }
}
document.onkeypress=function(event)
{
    if(time1=='not start')
        time1=new Date();
    var temp=event.keyCode;
    // console.log(temp);
    if(temp==97)
    {
        if(py>0&&maze[px][py-1]!=0)
            maze[px][py]=4,py=py-1,step=step-1;
        ShowMaze();
    }
    if(temp==119)
    {
        if(px>0&&maze[px-1][py]!=0)
            maze[px][py]=4,px=px-1,step=step-1;
        ShowMaze();
    }
    if(temp==115)
    {
        if(px<9&&maze[px+1][py]!=0)
            maze[px][py]=4,px=px+1,step=step-1;
        ShowMaze();
    }
    if(temp==100)
    {
        if(py<9&&maze[px][py+1]!=0)
            maze[px][py]=4,py=py+1,step=step-1;
        ShowMaze();
    }
}
