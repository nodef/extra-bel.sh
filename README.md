Produce BEL sound in Linux Terminal.
> 1. Download [bash script](https://github.com/winp/extra-bel/releases/download/1.0.0/ebel.cmd).
> 2. Set execute permission on the `bash script`, and copy to `~/scripts`.
> 3. Add `~/scripts` to `PATH` environment variable.


```bash
$ ebel [<count>]

# [] -> optional argument
# <> -> argument value
```

```bash
# produce one BEL
$ ebel

# produce 4 BELs
$ ebel 4

# produce 4 BELs after copy is over
$ cp src.zip dst.zip && ebel 4
```


[![Merferry](https://i.imgur.com/HgNA3W8.jpg)](https://merferry.github.io)
