# sh-bel

Produce BEL sound in Linux Terminal.


## usage

```bash
$ obel [<count>]

# [] -> optional argument
# <> -> argument value
```

```bash
# produce one BEL
$ obel

# produce 4 BELs
$ obel 4

# produce 4 BELs after copy is over
$ copy src.zip dst.zip & obel 4
```
