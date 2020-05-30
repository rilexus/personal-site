import * as React from "react"
import SEO from "../../components/seo"
import Header from "../../components/header/header"
import PageTitle from "../../components/page-title/page-title"
import Layout from "../../components/layout/layout"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemePropsI } from "../../providers/swith-theme/themes/default.theme"
import { useMemo } from "react"
import { deviceMediaQueries } from "../../themes/media-queries"
import Sticky from "../../components/sticky/sticky"
import { useMapScrollToValue } from "../../hooks/useMapedValue"

const H2 = styled.h2`
  padding-top: 3.8rem;
  padding-bottom: 0.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
`

const H3 = styled.h3`
  margin-bottom: 0.4rem;
  font-size: 1.2rem;
`
const H4 = styled.h4`
  font-weight: normal;
  margin-bottom: 0.5rem;
`
const Meta = styled.p`
  color: ${(props: ThemePropsI) => props.theme.colors.third}
  font-size: 0.8rem;
`

const Ul = styled.ul`
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  list-style: none;
`

const Li = styled.li`
  padding-left: 1.45rem;
  text-decoration: none;
  padding-bottom: 1.45rem;
  padding-top: 1.45rem;
  margin-bottom: 0;
  border-bottom: 1px solid #e7e7e7;
`

const ListLink = styled(Link)`
  color: ${(props: ThemePropsI) => props.theme.colors.text.prime};
  text-decoration: none;
  &:hover {
    ${Meta} {
      color: ${(props: ThemePropsI) => props.theme.colors.accent};
    }
    color: ${(props: ThemePropsI) => props.theme.colors.accent};
  }
`

const ListElement = ({ title, subtitle, meta, url }) => {
  return (
    <Li>
      <ListLink to={url}>
        <H3>{title}</H3>
        <H4>{subtitle}</H4>
        <Meta>{meta}</Meta>
      </ListLink>
    </Li>
  )
}
const StickyH2 = ({ children }) => {
  const fontSize = useMapScrollToValue(1.6, 1.2, 300, 600)
  return (
    <Sticky top={"0px"}>
      <H2
        style={{
          fontSize: `${fontSize}rem`,
        }}
      >
        {children}
      </H2>
    </Sticky>
  )
}
const List = ({ title, children }) => {
  return (
    <div>
      <StickyH2>{title}</StickyH2>
      <Ul>{children}</Ul>
    </div>
  )
}
const Column = styled.div`
  width: 100%; // default
  margin-bottom: 5rem;
  @media ${({ theme }: ThemePropsI) => theme.media.mobileL} {
    width: 50%;
  }
  @media ${({ theme }: ThemePropsI) => theme.media.laptop} {
    width: 33%;
  }
`

const ArticleColumn = ({ title, articles }) => {
  return (
    <Column>
      <List title={title}>
        {articles.map(({ title, subtitle, meta, url }, idx) => {
          return (
            <ListElement
              key={`blog-entry:${idx}`}
              title={title}
              subtitle={subtitle}
              meta={meta}
              url={url}
            />
          )
        })}
      </List>
    </Column>
  )
}

const patternsColumn = {
  title: "Patterns",
  articles: [
    {
      url: "visitor",
      title: "Visitor",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "visitor",
      title: "Visitor",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "visitor",
      title: "Visitor",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      url: "visitor",
      title: "Visitor",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "visitor",
      title: "Visitor",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "visitor",
      title: "Visitor",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "visitor",
      title: "Visitor",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "visitor",
      title: "Visitor",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "visitor",
      title: "Visitor",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      url: "some",
      title: "Controlled Component",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
  ],
}

const reactPatternsColumn = {
  title: "React Patterns",
  articles: [
    {
      title: "Controlled State",
      url: "some",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      title: "Controlled State",
      url: "some",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      title: "Controlled State",
      url: "some",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },

    {
      title: "Controlled State",
      url: "some",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
  ],
}

const thirdColumn = {
  title: "Testing",
  articles: [
    {
      title: "Controlled State",
      url: "some",
      subtitle: "separate logic from data",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
    {
      title: "Controlled Component",
      url: "some",
      subtitle: "Manage value and state",
      meta: "13.03.2020",
    },
  ],
}

const createPrepend = prefix => {
  return value => `${prefix}${value}`
}

const Blog = ({ location }) => {
  const pathname = location.pathname
  const prependPathName = useMemo(() => createPrepend(pathname), [pathname])

  const transformArticles = articles => {
    return articles.map(({ url, ...rest }) => {
      return {
        url: prependPathName(`/patterns/${url}`),
        ...rest,
      }
    })
  }

  const reactPatternArticles = useMemo(
    () => transformArticles(reactPatternsColumn.articles),
    []
  )
  const patternArticles = useMemo(
    () => transformArticles(patternsColumn.articles),
    []
  )
  const third = useMemo(() => transformArticles(thirdColumn.articles), [])

  return (
    <div>
      <SEO title="Blog" />
      <Header />
      <PageTitle title={"Blog"} />
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <ArticleColumn
            title={patternsColumn.title}
            articles={patternArticles}
          />
          <ArticleColumn
            title={reactPatternsColumn.title}
            articles={reactPatternArticles}
          />
          <ArticleColumn title={thirdColumn.title} articles={third} />
        </div>
      </Layout>
    </div>
  )
}

export default Blog
