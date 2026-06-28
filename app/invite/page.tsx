import { AnimDecor } from "../components/AnimDecor";
import { Reveal } from "../components/Reveal";
import { SectionDivider } from "../components/SectionDivider";

const telegramUrl = "https://t.me/+BxAbcckn-4xmZDQy";
const mapUrl =
  "https://yandex.ru/maps/org/dom_kultur/131157051825?si=fv5aq0xjqxu27w8p84bcxnfrbg";

const locations = [
  {
    label: "Венчание",
    text: "Венчание пройдёт в церкви",
    note: "дата и адрес уточняются",
    heart: "/images/decor/location-heart-1.png",
    heartWidth: 671,
    heartHeight: 681,
    mapUrl: null,
    variant: "primary",
  },
  {
    label: "Торжество",
    text: "Банкет пройдёт в Доме Культур",
    address: "Москва, Большой Сухаревский пер., 25, стр. 1",
    heart: "/images/decor/location-heart-2.png",
    heartWidth: 696,
    heartHeight: 721,
    mapUrl,
    variant: "secondary",
  },
];

const timing = [
  {
    time: "сентябрь",
    title: "венчание в церкви",
    tentative: true,
  },
  {
    time: "17:30",
    title: "сбор гостей",
    tentative: false,
  },
  {
    time: "18:00",
    title: "торжество",
    tentative: false,
  },
];

const wishes = [
  {
    number: "#1",
    text: "Ваше присутствие для нас — главный подарок этого дня.",
    shape: "wishCard",
    art: "/images/decor/wish-card-art.png",
    width: 501,
    height: 352,
  },
  {
    number: "#2",
    text: "Если захотите сделать подарок, будем благодарны за вклад в наши семейные планы.",
    shape: "wishPuzzle",
    art: "/images/decor/wish-puzzle-art.png",
    width: 482,
    height: 533,
  },
  {
    number: "#3",
    text: "Все важные детали, вопросы и обновления будем собирать в чате гостей.",
    shape: "wishFlower",
    art: "/images/decor/wish-flower-art.png",
    width: 554,
    height: 582,
  },
];

export default function InvitePage() {
  return (
    <>
      <a className="skipLink" href="#main-content">
        Перейти к содержимому
      </a>

      <main
        id="main-content"
        className="longreadPage min-h-screen antialiased"
      >
        <section className="lrSection heroLongread">
          <AnimDecor
            className="decorCamera"
            src="/images/decor/camera.png"
            width={303}
            height={164}
            alt=""
            aria-hidden="true"
            revealFrom="left"
            motion="drift"
          />
          <AnimDecor
            className="decorDisco"
            src="/images/decor/disco-ball.png"
            width={207}
            height={329}
            alt=""
            aria-hidden="true"
            revealFrom="right"
            motion="float"
            delay={120}
          />

          <Reveal variant="scale" className="heroGridNames">
            <div className="heroNames">
              <h1 className="heroTitle">
              <img
                className="heroLogo"
                src="/images/hero-logo.png?v=3"
                width="870"
                height="556"
                alt="Лера + Дима = любовь"
              />
              </h1>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100} className="heroGridPhoto">
            <div className="heroPhotoStage" aria-label="Фото пары">
            <img
              className="heroHeart heroHeartOne"
              src="/images/decor/heart-outline.png"
              width="68"
              height="69"
              alt=""
              aria-hidden="true"
            />
            <img
              className="heroHeart heroHeartTwo"
              src="/images/decor/heart-glossy.png"
              width="110"
              height="113"
              alt=""
              aria-hidden="true"
            />
            <img
              className="heroHeart heroHeartThree"
              src="/images/decor/heart-tilted.png"
              width="109"
              height="106"
              alt=""
              aria-hidden="true"
            />
            <img
              className="heroHeart heroHeartFour"
              src="/images/decor/heart-scribble.png"
              width="111"
              height="101"
              alt=""
              aria-hidden="true"
            />
            <img
              className="heroHeart heroHeartFive"
              src="/images/decor/heart-outline.png"
              width="68"
              height="69"
              alt=""
              aria-hidden="true"
            />
            <img
              className="heroHeart heroHeartSix"
              src="/images/decor/heart-glossy.png"
              width="110"
              height="113"
              alt=""
              aria-hidden="true"
            />
            <img
              className="heroAdultPhoto"
              src="/images/hero-main.png"
              width="1042"
              height="1068"
              alt="Лера и Дима в детстве"
            />
            </div>
          </Reveal>

          <Reveal variant="up" delay={200} className="heroGridActions">
            <div className="heroActions">
              <a className="scribbleButton" href="/wedding-lera-dima.ics">
              Добавить в календарь
            </a>
          </div>
          </Reveal>
        </section>

        <SectionDivider index={0} />

        <section className="lrSection introSection">
          <AnimDecor
            className="decorIntroFlower"
            src="/images/decor/rose.png"
            width={265}
            height={185}
            alt=""
            aria-hidden="true"
            revealFrom="right"
            motion="sway"
            delay={200}
          />
          <div className="introCopy">
            <Reveal variant="left">
              <h2>Узнали?</h2>
            </Reveal>
            <Reveal variant="left" delay={80}>
              <p>
                Кажется, мы только вчера были детьми, а теперь зовём вас на нашу
                свадьбу. Да-да, всё по-настоящему!
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={160}>
            <img
              className="calendarImage"
              src="/images/calendar-september-2026.png"
              width="982"
              height="972"
              alt="Календарь на сентябрь 2026, дата свадьбы 9 сентября"
            />
          </Reveal>
        </section>

        <SectionDivider index={1} />

        <section className="lrSection locationSection" id="place">
          <AnimDecor
            className="locationGroom"
            src="/images/decor/location-groom.png"
            width={511}
            height={698}
            alt=""
            aria-hidden="true"
            revealFrom="right"
            motion="drift"
          />
          <AnimDecor
            className="locationBride"
            src="/images/decor/location-bride.png"
            width={515}
            height={825}
            alt=""
            aria-hidden="true"
            revealFrom="left"
            motion="sway"
            delay={150}
          />
          <img
            className="locationFloatHeart locationFloatHeartOne"
            src="/images/decor/heart-outline.png"
            width="68"
            height="69"
            alt=""
            aria-hidden="true"
          />
          <img
            className="locationFloatHeart locationFloatHeartTwo"
            src="/images/decor/heart-scribble.png"
            width="111"
            height="101"
            alt=""
            aria-hidden="true"
          />
          <Reveal>
            <h2>Локация</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="locationDate">9 сентября 2026</p>
          </Reveal>
          <div className="locationHeartsStage" aria-label="Адреса мероприятий">
            {locations.map((location, index) => (
              <Reveal key={location.label} variant="tilt" delay={120 + index * 100}>
                <div
                  className={`locationHeartCard locationHeart${location.variant === "primary" ? "Primary" : "Secondary"}`}
                >
                  <img
                    className="locationHeartArt"
                    src={location.heart}
                    width={location.heartWidth}
                    height={location.heartHeight}
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="locationHeartContent">
                    <p className="locationHeartLead">{location.text}</p>
                    {location.address ? (
                      <p className="locationHeartAddress">{location.address}</p>
                    ) : (
                      <p className="locationHeartNote">{location.note}</p>
                    )}
                    {location.mapUrl ? (
                      <a
                        className="locationRouteLink"
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        / Построить маршрут /
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <SectionDivider index={2} />

        <section className="lrSection timingSection" id="program">
          <AnimDecor
            className="decorCake"
            src="/images/decor/cake-table.png"
            width={482}
            height={410}
            alt=""
            aria-hidden="true"
            revealFrom="left"
            motion="float"
          />
          <Reveal>
            <h2>Тайминг</h2>
          </Reveal>
          <div className="timingList">
            {timing.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div
                  className={`timingItem${item.tentative ? " timingItemTentative" : ""}`}
                >
                  <p className="timingLine">
                    <span className="timingTime">{item.time}</span>
                    <span className="timingDash">—</span>
                    <span className="timingTitle">{item.title}</span>
                  </p>
                  {item.tentative && (
                    <em className="timingNote">дата уточняется</em>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240}>
            <div className="timingVenue">
              <p className="timingVenueName">Дом Культур</p>
              <p className="timingVenueAddress">
                Москва, Большой Сухаревский пер., 25, стр. 1
              </p>
            </div>
          </Reveal>
        </section>

        <SectionDivider index={3} />

        <section className="lrSection wishesSection">
          <AnimDecor
            className="decorBlueFlowers"
            src="/images/decor/blue-flowers.png"
            width={208}
            height={213}
            alt=""
            aria-hidden="true"
            revealFrom="right"
            motion="float"
            delay={100}
          />
          <Reveal>
            <h2>Пожелания</h2>
          </Reveal>
          <div className="wishList">
            {wishes.map((wish, index) => (
              <Reveal
                key={wish.number}
                className="wishItem"
                variant="tilt"
                delay={index * 100}
              >
                <p>{wish.number}</p>
                <div className={`wishArtwork ${wish.shape}`}>
                  <img
                    className="wishArtImage"
                    src={wish.art}
                    width={wish.width}
                    height={wish.height}
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="wishText">{wish.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <SectionDivider index={4} />

        <section className="lrSection dressSection" id="dress-code">
          <AnimDecor
            className="decorBouquet"
            src="/images/decor/bouquet-main.png"
            width={341}
            height={435}
            alt=""
            aria-hidden="true"
            revealFrom="right"
            motion="sway"
          />
          <Reveal>
            <h2>Дресс-код</h2>
          </Reveal>
          <Reveal variant="scale" delay={80}>
            <img
              className="dressCodeText"
              src="/images/decor/dress-code-text.png"
              width="938"
              height="409"
              alt="Будем рады, если ваш образ поддержит палитру праздника: садовые оттенки, бордо, олива, тёплый оранжевый, чёрный и светлые акценты."
            />
          </Reveal>
          <Reveal delay={160}>
            <img
              className="dressCodeHearts"
              src="/images/decor/dress-code-hearts.png"
              width="988"
              height="223"
              alt="Цвета дресс-кода: олива, бордо, оранж, чёрный, светлый"
            />
          </Reveal>
        </section>

        <SectionDivider index={5} />

        <section className="lrSection memoriesSection">
          <AnimDecor
            className="decorTallFlowers"
            src="/images/decor/tall-flowers.png"
            width={259}
            height={387}
            alt=""
            aria-hidden="true"
            revealFrom="left"
            motion="sway"
          />
          <Reveal variant="scale">
            <div className="filmBlock">
              <h2>Воспоминания</h2>
              <p>
                Чтобы этот день остался живым, присылайте фото и видео в общий
                Telegram-чат.
              </p>
              <div className="memoryGallery" aria-label="Фотографии Леры и Димы">
                <Reveal variant="tilt" delay={120} className="memoryPhotoReveal">
                  <img
                    className="memoryStickerPhoto"
                    src="/images/memory-couple-sticker.png"
                    width="853"
                    height="1280"
                    alt="Лера и Дима на фотосессии"
                  />
                </Reveal>
                <Reveal variant="right" delay={260} className="memoryPhotoReveal">
                  <img
                    className="memoryFramePhoto"
                    src="/images/memory-couple-playful.png"
                    width="556"
                    height="872"
                    alt="Лера и Дима смеются"
                  />
                </Reveal>
              </div>
              <a
                className="scribbleButton"
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Отправить фото
              </a>
            </div>
          </Reveal>
        </section>

        <footer className="longreadFooter">
          <Reveal>
            <p className="footerSignoff">До встречи</p>
          </Reveal>
          <img
            className="footerDateScript"
            src="/images/decor/date-script.png"
            width="369"
            height="57"
            alt="09.09.2026"
          />
          <div className="coupleLine" aria-hidden="true" />
          <Reveal delay={120}>
            <a className="scribbleButton footerCalendarButton" href="/wedding-lera-dima.ics">
              Добавить в календарь
            </a>
          </Reveal>
        </footer>
      </main>
    </>
  );
}
