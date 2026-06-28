const telegramUrl = "https://t.me/+BxAbcckn-4xmZDQy";
const mapUrl =
  "https://yandex.ru/maps/org/dom_kultur/131157051825?si=fv5aq0xjqxu27w8p84bcxnfrbg";

const calendarDays = [
  null,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
];

const photobooth = [
  {
    src: "/images/official-photobooth-1.jpg",
    alt: "Лера и Дима в фотобудке",
    className: "officialPhoto officialPhotoA",
  },
  {
    src: "/images/couple-heart.jpg",
    alt: "Лера и Дима на фотосессии",
    className: "officialPhoto officialPhotoB",
  },
  {
    src: "/images/official-photobooth-3.jpg",
    alt: "Лера и Дима в фотобудке",
    className: "officialPhoto officialPhotoC",
  },
  {
    src: "/images/official-photobooth-4.jpg",
    alt: "Лера и Дима",
    className: "officialPhoto officialPhotoD",
  },
];

const placePhotos = [
  {
    src: "/images/official-dom-kultur-1.jpg",
    alt: "Сервировка в Доме Культур",
  },
  {
    src: "/images/official-dom-kultur-2.jpg",
    alt: "Праздничный стол в Доме Культур",
  },
];

const timing = [
  {
    time: "сентябрь",
    title: "Венчание в церкви",
    text: "время и точное место будут в Telegram-чате",
  },
  {
    time: "17:30",
    title: "Сбор гостей",
    text: "Дом Культур",
  },
  {
    time: "18:00",
    title: "Торжество",
    text: "ужин, тосты и танцы",
  },
];

const dressCodePalette = {
  src: "/images/generated/dress-code-palette-21321.png",
  width: 1536,
  height: 882,
  alt: "Палитра дресс-кода: Grasslands, Bluebell, Butter Yellow, Blood Orange, Terra Cotta, Grape Fizz",
};

const dressCodeExamples = {
  src: "/images/generated/dress-code-examples.png",
  width: 1536,
  height: 657,
  alt: "Примеры образов для дресс-кода",
};

export default function Home() {
  return (
    <main className="officialPage">
      <section className="officialHero">
        <div className="officialHeroInner">
          <div className="officialKickerSpacer" aria-hidden="true" />
          <h1>ЛЕРА И ДИМА</h1>
          <img
            className="officialHeroHeart"
            src="/images/generated/official-heart-red.png"
            width="142"
            height="153"
            alt=""
            aria-hidden="true"
          />
          <p className="officialWeddingDay">wedding day!</p>
          <p className="officialDateTop">09|09|26</p>

          <div className="officialPhotoStage">
            <div className="officialPhotoGrid" aria-label="Фотографии пары">
              {photobooth.map((photo) => (
                <figure className="officialPhotoCell" key={photo.className}>
                  <img className={photo.className} src={photo.src} alt={photo.alt} />
                </figure>
              ))}
            </div>
            <img
              className="officialPhotoTexture"
              src="/images/generated/vintage-layer.png"
              width="754"
              height="1024"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="officialCream officialIntro">
        <p>
          Дорогие родные и близкие, мы женимся и мечтаем разделить этот день с
          вами!
        </p>
        <img
          className="officialSmallHeart"
          src="/images/generated/official-heart-red.png"
          width="142"
          height="153"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section className="officialCream officialCalendarSection">
        <h2>Дата бракосочетания</h2>
        <p className="officialMonth">сентябрь | 2026</p>
        <div className="officialCalendar" aria-label="Календарь на сентябрь 2026">
          {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((day) => (
            <span className="officialWeekday" key={day}>
              {day}
            </span>
          ))}
          {calendarDays.map((day, index) =>
            day ? (
              <span
                className={day === 9 ? "officialDay officialDayActive" : "officialDay"}
                key={day}
              >
                {day}
              </span>
            ) : (
              <i key={`blank-${index}`} />
            ),
          )}
        </div>
        <img
          className="officialArrow"
          src="/images/generated/official-arrow.png"
          width="457"
          height="687"
          alt=""
          aria-hidden="true"
        />
        <a className="officialButton" href="/wedding-lera-dima.ics">
          Добавить в календарь
        </a>
      </section>

      <section className="officialCream officialPlace">
        <h2>Место проведения</h2>
        <p className="officialPlaceName">Дом Культур</p>
        <div className="officialPlaceCard">
          {placePhotos.map((photo) => (
            <img src={photo.src} alt={photo.alt} key={photo.src} />
          ))}
        </div>
        <p className="officialAddress">
          Москва, Большой Сухаревский пер., 25, стр. 1
        </p>
        <a className="officialButton" href={mapUrl}>
          Построить маршрут
        </a>
      </section>

      <section className="officialRed officialTimingDress">
        <div className="officialTiming">
          <h2>Тайминг</h2>
          {timing.map((item) => (
            <div className="officialTimingItem" key={item.title}>
              <strong>{item.time}</strong>
              <p>{item.title}</p>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <img
          className="officialWhiteHeart"
          src="/images/generated/official-heart-red.png"
          width="142"
          height="153"
          alt=""
          aria-hidden="true"
        />

        <div className="officialDress">
          <h2>Дресс-код</h2>
          <p>
            Мы очень ждем и с удовольствием готовимся к нашему дню. Будем
            здорово, если своими нарядами вы поддержите палитру нашей свадьбы!
          </p>
          <div className="officialDressImages" aria-label="Цвета дресс-кода">
            <img
              className="officialDressImage officialDressImagePalette"
              src={dressCodePalette.src}
              width={dressCodePalette.width}
              height={dressCodePalette.height}
              alt={dressCodePalette.alt}
            />
          </div>
        </div>
      </section>

      <section className="officialCream officialDressExamplesSection">
        <img
          className="officialDressImage officialDressImageWide"
          src={dressCodeExamples.src}
          width={dressCodeExamples.width}
          height={dressCodeExamples.height}
          alt={dressCodeExamples.alt}
        />
      </section>

      <section className="officialCream officialRsvp">
        <h2>Вы придете?</h2>
        <p>
          Мы будем очень рады видеть вас на нашем торжестве. Пожалуйста,
          подтвердите свое присутствие в Telegram-чате.
        </p>
        <a className="officialButton" href={telegramUrl}>
          Мы будем!
        </a>
        <img
          className="officialFooterHeart"
          src="/images/generated/official-heart-red.png"
          width="142"
          height="153"
          alt=""
          aria-hidden="true"
        />
      </section>
    </main>
  );
}
