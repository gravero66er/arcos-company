// Libraries
import React from "react";

// Components
import FirstHistoryStage from "./FirstHistoryStage";
import FourthHistoryStage from "./FourthHistoryStage";
import SecondHistoryStage from "./SecondHistoryStage";
import ThirdHistoryStage from "./ThirdHistoryStage";
import TitleIcon from "./svg/TitleIcon";

export default function History() {
  const firstStage = {
    color: "#9FA6C1",
    years: "2010-2013",
    title: "Основание",
    info: "В 2010 году Попов Н.С. основал ТД «Аркос» в Екатеринбурге. Это стало рождением группы компаний «Аркос», включающей три разнонаправленных подразделения. Их всех объединяет одна миссия — стать торгово-производственной компанией федерального уровня, с дочерними предприятиями в ЕС. Вскоре торговый дом «Аркос» выходит на рынок арматурной комплектации систем трубопроводов."
  };
  const secondStage = {
    color: "#DDE2F3",
    years: "2013-2015",
    title: "Фитинги",
    info: "ТД «Аркос» запускает единственную в России линия по производству PPSU фитингов. За первый год работы было продано 85 000 изделий, на 4,5 млн рублей. На производстве с 1 термопластавтоматом и командой состоящей из оператора и упаковщицы. В 2014 году появляется «Аркос-Строй» — строительное подразделение. За год подразделение осуществиляет монтаж более чем 16 500 м² жилья."
  };
  const thirdStage = {
    color: "#757B93",
    years: "2015-2019",
    title: "Развитие",
    info: "В 2019 году на производстве компании было переработано более 25 тонн сырья и продано более 1 600 000 собственной продукции, а производственный цех вырос до 5 термопластавтоматов. Специалисты «Аркос-Строй» тем временем успешно выполнили монтаж ОВ и ВК на 75 000 м² для общестроительных объектов в Екатеринбурге, Свердловской области и ближайших регионах."
  };
  const fourthStage = {
    color: "#4390D8",
    years: "2019-...",
    title: "Дальше больше!",
    info: `В 2020 производственное подразделение набирает обороты и выпускает более 600 000 собственной продукции в месяц, а строительное подразделение «Аркос-Строй» производит монтаж более чем на 104 600 м² жилья. Сегодня производство компании стремительно развивается и выпускает более 840 000 собственной продукции в месяц на 6 термопластавтоматах.`
  };

  return (
    <section className="history" id="history">
      <div className="title__wrapper">
        <h2 className="title__h2">История</h2>
        <div className="title__icon">
          <TitleIcon
            path={"M13 13.414a1 1 0 00.707.293h.586a1 1 0 00.707-.293l4.707-4.707L22 11V5h-6l2.293 2.293L14 11.586l-3-3a1 1 0 00-.707-.293h-.586A1 1 0 009 8.586l-6.707 6.707 1.414 1.414L10 10.414l3 3z"} />
        </div>
      </div>
      <p className="history__description article article--half">
        В 2010 году ТД «Аркос» появился на рынке инженерных коммуникаций в
        Свердловской области. С самого начала торговый дом стремительно
        развивался и методом проб, и ошибок нашел свою формулу успеха. За 11 лет
        работы «Аркос» вырос из маленького предприятия в многоуровневый холдинг.
      </p>
      <section className="history__stages">
        <FirstHistoryStage
          color={firstStage.color}
          years={firstStage.years}
          title={firstStage.title}
          info={firstStage.info}
        />
        <SecondHistoryStage
          color={secondStage.color}
          years={secondStage.years}
          title={secondStage.title}
          info={secondStage.info}
        />
        <ThirdHistoryStage
          color={thirdStage.color}
          years={thirdStage.years}
          title={thirdStage.title}
          info={thirdStage.info}
        />
        <FourthHistoryStage
          color={fourthStage.color}
          years={fourthStage.years}
          title={fourthStage.title}
          info={fourthStage.info}
        />
      </section>
    </section>
  );
}
