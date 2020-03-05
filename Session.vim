let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/work_space/app-git/project-2
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +10 src/components/layout/HomePage.js
badd +97 src/App.css
badd +15 src/App.js
badd +19 src/components/css/HomePage.css
badd +15 src/components/tracks/Tracks.js
badd +29 src/Context.js
badd +1 src/components/css/Header.css
badd +12 src/components/layout/Header.js
badd +61 src/components/layout/LyricPage.js
badd +1 src/components/css/Track.css
badd +20 term://.//82932:/bin/zsh
badd +20 term://.//91871:/bin/zsh
badd +5 src/components/css/LyricPage.css
badd +12 src/components/tracks/Search.js
argglobal
%argdel
edit src/components/tracks/Search.js
set splitbelow splitright
set nosplitbelow
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=marker
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 32 - ((17 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
32
normal! 06|
lcd ~/work_space/app-git/project-2
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFcI
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
