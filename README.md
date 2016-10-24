# Containers Meetup Prague


## Instalation

### Mac

```
brew update && brew install hugo
```

Just download binary from https://github.com/spf13/hugo/releases


### Usage - look into [quickstart](https://gohugo.io/overview/quickstart/)

- Add new post

```
hugo new post/good-to-great.md
```

- Add our theme

```
git submodule update --init
```

- Run local webserver

```
hugo server
```


- Generate new version


```
hugo -d docs/
```
