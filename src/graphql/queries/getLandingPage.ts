import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}

fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      alternativeText
      url
    }
  }
}

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
      title
      description
      midia {
        url
        alternativeText
      }
    }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      title
      icon {
        url
        alternativeText
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}

fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}

fragment sectionAgenda on LandingPage {
  sectionAgenda {
    title
    description
  }
}

fragment pricingBox on LandingPage {
  pricingBox {
    totalPrice
    numberInstallments
    priceInstallments
    benefits {
      item
    }
    button {
      label
      url
    }
  }
}

fragment sectionAboutUs on LandingPage {
  sectionAboutUs {
      title
      authors {
        name
        role
        description
        socialLinks {
          url
          title
        }
        description
        photo {
          url
          alternativeText
        }
      }
  }
}

fragment sectionReviews on LandingPage {
  sectionReviews {
    title
    reviews {
      name
      text
      photo {
        url
      }
    }
  }
}

fragment sectionFaq on LandingPage {
  sectionFaq {
      title
      questions {
        question
        answer
      }
    }
}

query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...sectionAboutProject
    ...sectionTech
    ...sectionConcepts
    ...sectionModules
    ...sectionAgenda
    ...pricingBox
    ...sectionAboutUs
    ...sectionReviews
    ...sectionFaq
  }
}
`

export default GET_LANDING_PAGE
