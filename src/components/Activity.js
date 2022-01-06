// Libraries
import React from "react"

// Components
import CareerAccordion from "./CareerAccordion"
import DevelopAccordion from "./DevelopAccordion"
import ProductionAccordion from "./ProductionAccordion"
import StorageAccordion from "./StorageAccordion"

export default function Activity() {
  const storage = {
    title: "Торговый дом",
    description:
      "ТД «Аркос» специализируется на инженерных коммуникациях. Оптово-розничное подразделение представляет интересы производителей трубной арматуры России, Европы и Азии. Среди наших поставщиков и партнёров крупные федеральные компании и заводы такие как: Buderus, DAB, Sanha, Con-PIPE, Профсан.",
    link: "https://www.td-arcos.ru",
  }
  const develop = {
    title: "Аркос-строй",
    description:
      "Строительно-монтажное подразделение квалифицируется на устройстве инженерных коммуникаций, ОВ, ВК, ИТП. Сегодня ООО «Аркос-Строй» расширяет свои возможности и выходит на новый вид работ 一 устройство систем внутреннего электроосвещения и силового оборудования в строительной отрасли Уральского региона.",
    link: "https://www.td-arcos.ru",
  }
  const production = {
    title: "Производство",
    description:
      "Производственное подразделение компании занимается изготовлением полимерных изделий от самых простых PET и PPE до высокотемпературных PPSU и PVDF. Круглосуточная производственная линия включающая в себя пять термопласт-автоматов дает возможность качественно изготовить необходимый объем продукции.",
    link: "https://www.td-arcos.ru",
  }
  const career = {
    title: "Карьера",
    description:
      "В штате холдинга работает более 100 человек, мы ценим сотрудников стремящихся развиваться профессионально и расти по карьерной лестнице. Компания дает возможность повышать уровень знаний с помощью внутреннего обучения и прохождения специализированных тренингов по итогам аттестации.",
    link: "https://www.td-arcos.ru",
  }

  return (
    <section className="activity__list">
      <StorageAccordion
        title={storage.title}
        description={storage.description}
        link={storage.link}
      />
      <DevelopAccordion
        title={develop.title}
        description={develop.description}
        link={develop.link}
      />
      <ProductionAccordion
        title={production.title}
        description={production.description}
        link={production.link}
      />
      <CareerAccordion
        title={career.title}
        description={career.description}
        link={career.link}
      />
    </section>
  )
}

// Need refactoring
