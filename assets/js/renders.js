$.render=()=>{
    const shortcuts={
        h:'height', w:'width',
        mtop:'margin-top', mbottom:'margin-bottom', mleft:'margin-left', mright:'margin-right',
        ptop:'padding-top', pbottom:'padding-bottom', pleft:'padding-left', pright:'padding-right',
    };
    for(let i in shortcuts)
    {
        let temp=document.querySelectorAll(`*[${i}]`);
        for(let it=0; it<temp.length; it++)
        {
            let attributeValue=temp[it].getAttribute(i);
            attributeValue=attributeValue+(!isNaN(parseInt(attributeValue[attributeValue.length-1]))? "px":"");
            temp[it].style.setProperty(shortcuts[i],attributeValue,'important');
        }
    }
    return;
};

$.loadWebsites=()=>{
    const data=[
        {name:"神奇迷宫验证码",info:"疑似人身攻击",image:"./assets/img/7.png"},
        {name:"网站解谜",info:"好吧有人已经通关了",image:"./assets/img/13.png"},
        {name:"博弈论",info:"爆算 SG 函数",image:"./assets/img/5.png"},
        {name:"网站资源",info:"让你的网站更美观便利",image:"./assets/img/6.png"},
        {name:"Numble",info:"Wordle 的变种",image:"./assets/img/9.png"},
    ];
    const template=(name,info,img,wid)=>{
        return `
            <div class="col-lg-${wid}">
                <div class="card bg-dark overlay overlay-black text-white shadow-sm border-0">
                    <img class="card-img rounded-sm" src="${img}" alt="Card image">
                    <div class="card-img-overlay d-flex align-items-center text-center">
                        <div class="card-body">
                            <h3 class="card-title">${name}</h3>
                            <p class="card-text">${info}</p>
                            <a href="${address}" class="btn btn-info btn-round">Visit website</a>
                        </div>
                    </div>
                </div>
            </div>`;
    };
    const origin=document.getElementById('websites');
    for(let i=0; i<data.length; i+=2)
    {
        let temp=``;
        if(!data[i+1]) temp=template(data[i].name,data[i].info,data[i].image,6);
        else temp=template(data[i].name,data[i].info,data[i].image,6)+template(data[i+1].name,data[i+1].info,data[i+1].image,6);
        temp='<section data-aos="fade-in" ptop=20 class="align-items-center" data-aos-offset=100><div class="row">'+temp+'</div></section>';
        origin.innerHTML+=temp;
    }
    return;
};