function ListChange(box , boxW , liLen , delay){
        var $box = $('#' + box);
        var $ul  = $('#' + box + ' ul');
        var $li  = $('#' + box + ' li');

        $('#' + box + ' li:nth-child(' + liLen + 'n)').css('margin-right',0);

        var page = parseInt($li.length / liLen);
        page = $li.length % liLen > 0 ? page + 1 : page;
        $ul.css('width',boxW * page);

        if(page > 1){
            for(var i = 0 ; i < page ; i++){
                if(i==0){
                    $('#setPage').append('<a class="setPageIn" href="javascript:void(0)"></a>');
                }else{
                    $('#setPage').append('<a href="javascript:void(0)"></a>');
                }
            }
            $('#showPage').on('click','#setPage a',function(){
                clearTimeout(curTimer);
                var $this = $(this);
                curpage = $this.index();
                $ul.stop().animate({'margin-left':-curpage * boxW},'slow',function(){
                    curTimer = setTimeout(changePage,delay);
                });
                $this.addClass('setPageIn').siblings().removeClass('setPageIn');
            });
            var curpage = 0;
            var curTimer = setTimeout(changePage,delay);
            function changePage(){
                curpage++;
                if(curpage >= page){
                    curpage = 0;
                }
                $('#setPage a').eq(curpage).trigger('click');
                curTimer = setTimeout(changePage,delay);
            }
        }
    }
