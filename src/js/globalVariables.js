export const date = new Date();
export const weekday = {
	'0': [['Sunday', 'Monday', 'Tuesday', 'Wednesday'], ['Воскре­сенье', 'Понедель­ник', 'Вторник', 'Среда'], ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада']],
	'1': [['Monday', 'Tuesday', 'Wednesday', 'Thursday'], ['Понедель­ник', 'Вторник', 'Среда', 'Четверг'], ['Панядзелак', 'Аўторак', 'Серада', 'Чацвер']],
	'2': [['Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Вторник', 'Среда', 'Четверг', 'Пятница'], ['Аўторак', 'Серада', 'Чацвер', 'Пятніца']],
	'3': [['Wednesday', 'Thursday', 'Friday', 'Saturday'], ['Среда', 'Четверг', 'Пятница', 'Суббота'], ['Серада', 'Чацвер', 'Пятніца', 'Субота']],
	'4': [['Thursday', 'Friday', 'Saturday', 'Sunday'], ['Четверг', 'Пятница', 'Суббота', 'Воскре­сенье'], ['Чацвер', 'Пятніца', 'Субота', 'Нядзеля']],
	'5': [['Friday', 'Saturday', 'Sunday', 'Monday'], ['Пятница', 'Суббота', 'Воскре­сенье', 'Понедель­ник'], ['Пятніца', 'Субота', 'Нядзеля', 'Панядзелак']],
	'6': [['Saturday', 'Sunday', 'Monday', 'Tuesday'], ['Суббота', 'Воскре­сенье', 'Понедель­ник', 'Вторник'], ['Субота', 'Нядзеля', 'Панядзелак', 'Аўторак']],
}

export const month = {
	'0': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
		'November', 'December'],
	'1': ['Январь ', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь',
		'Ноябрь', 'Декабрь'],
	'2': ['Студзень', 'Люты', 'Сакавiк', 'Красавiк', 'Май', 'Червень', 'Лiпень', 'Жнiвень', 'Верасень', 'Кастрычнiк',
		'Лiстапад', 'Снежань']
};

export const weekDay = {
	weekDayEn: ['Sunday', 'Monday ', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	weekDayRu: ['Воскре­сенье', 'Понедель­ник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	weekDayBe: ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота']
};

export const coordinates = {
	coordinatesEn: ['latitude:', 'longitude:'],
	coordinatesRu: ['широта:', 'долгота:'],
	coordinatesBe: ['шырата:', 'даўгата:']
};



export const descriptionWeather = {
	descriptionWeatherEn: ['Feel like:', 'Wind:', `Humidity:`],
	descriptionWeatherRu: ['По ощущению:', 'Ветер:', 'Влажность'],
	descriptionWeatherBe: ['Па адчуванні:', 'Вецер:', 'Вільготнасць:']
};

export const button = {
	buttonEn: ['Search'],
	buttonRu: ['Поиск'],
	buttonBe: ['Пошук']
};


export const arrayTranslate = ["button-search-local"];

export const WeatherConditionCodes = {
	200: ['thunderstorm with light rain','гроза с небольшим дождем','навальніца з невялікім дажджом'],
	201: ['thunderstorm with rain','гроза с дождем','навальніца з дажджом'],
	202: ['thunderstorm with heavy rain','гроза с проливным дождем','навальніца з моцным дажджом'],
	210: ['light thunderstorm','небольшая гроза','невялікая навальніца'],
	211: ['thunderstorm','гроза','навальніца'],
	212: ['heavy thunderstorm','сильная гроза','моцная навальніца'],
	221: ['ragged thunderstorm', 'временами гроза','часам навальніца'],
	230: ['thunderstorm with light drizzle', 'гроза с небошльшим дождем','навальніца з небошльшим дажджом'],
	231: ['thunderstorm with drizzle', 'гроза с дождем','навальніца з дажджом'],
	232: ['thunderstorm with heavy drizzle', 'гроза с сильным дождем','навальніца з моцным дажджом'],

	300: ['light intensity drizzle', 'маленький туман','невялікая імгла'],
	301: ['drizzle','небольшой дождь, туман','невялики дождж, імгла'],
	302: ['heavy intensity drizzle', 'сильный моросящий дождь','моцны дробны дождж'],
	310: ['light intensity drizzle rain','интенсивный моросящий дождь','невялікая імгла з дажджом'],
	311: ['drizzle rain', 'моросящий дождь','дробны дождж'],
	312: ['heavy intensity drizzle rain', 'сильный моросящий дождь','моцны дробны дождж'],
	313: ['shower rain and drizzle', 'кратковременный моросящий дождь','кароткачасовы дробны дождж'],
	314: ['heavy shower rain and drizzle','сильный кратковременный моросящий дождь','моцны кароткачасовы дождж з імглой'],
	321: ['shower drizzle', 'кратковременный моросящий дождь','кароткачасовы дробны дождж'],

	500: ['light rain', 'небольшой дождь','невялікі дождж'],
	501: ['moderate rain','умеренный дождь','умераны дождж'],
	502: ['heavy intensity rain','ливень','моцны дождж'],
	503: ['very heavy rain','ливень','вельмі моцны дождж'],
	504: ['extreme rain','ливень','лівень'],
	511: ['freezing rain','дождь с градом','дождж з градам'],
	520: ['light intensity shower rain', 'небольшой краткосрочный дождь','невялікі кароткачасовы дождж'],
	521: ['shower rain','краткосрочный дождь','кароткачасовы дождж'],
	522: ['heavy intensity shower rain','сильный краткосрочный дождь','моцны кароткачасовы дождж'],
	531: ['ragged shower rain','краткосрочные дожди','кароткачасовыя дажджы'],

	600: ['light snow','небольшой снег','невялікі снег'],
	601: ['snow','снег','снег'],
	602: ['heavy snow','сильный снег','моцны снег'],
	611: ['sleet','мокрый снег','мокры снег'],
	612: ['light shower sleet','краткосрочный мокрый снег','кароткачасовы мокры снег'],
	613: ['shower sleet','мокрый снег','мокры снег'],
	615: ['light rain and snow','небольшой дождь со снегом','невялики дождж са снегам'],
	616: ['rain and snow','дождь со снегом','дождж са снегам'],
	620: ['light shower snow','небольшой краткосрочный снег','невялики кароткачасовы снег'],
	621: ['shower snow','краткосрочный снег','кароткачасовы снег'],
	622: ['heavy shower snow','сильный краткосрочный снег','моцны кароткачасовы снег'],

	701: ['mist	', 'мгла','імгла'],
	711: ['smoke','дым','дым'],
	721: ['haze','легки туман','лёгкі туман'],
	731: ['dust whirls','вихрь песка и пыли','віхор пяску і пылу'],
	741: ['fog','туман','туман'],
	751: ['sand','песок','пясок'],
	761: ['dust','пыль','пыл'],
	762: ['volcanic ash','вулканический пепел','вулканічны попел'],
	771: ['squalls', 'вихрь','віхор'],
	781: ['tornado','торнадо','тарнада'],

	800: ['clear sky','ясно','ясна'],
	801: ['few clouds','небольшая облачность','невялікая воблачнасць'],
	802: ['scattered clouds','облачно','воблачна'],
	803: ['broken clouds','переменная облачность','пераменная воблачнасць'],
	804: ['overcast clouds','пасмурно','пахмурна']
}

export const iconWeather = {
	'01d': '../assets/img/animated-icon-weather/day.svg',
	'02d': '../assets/img/animated-icon-weather/cloudy-day-3.svg',
	'03d': '../assets/img/animated-icon-weather/cloudy.svg',
	'04d': '../assets/img/animated-icon-weather/cloudy.svg',
	'09d': '../assets/img/animated-icon-weather/rainy-6.svg',
	'10d': '../assets/img/animated-icon-weather/rainy-6.svg',
	'11d': '../assets/img/animated-icon-weather/thunder.svg',
	'13d': '../assets/img/animated-icon-weather/snowy-6.svg',
	'50d': '../assets/img/animated-icon-weather/cloudy.svg',

	'01n': '../assets/img/animated-icon-weather/night.svg',
	'02n': '../assets/img/animated-icon-weather/cloudy-night-3.svg',
	'03n': '../assets/img/animated-icon-weather/cloudy.svg',
	'04n': '../assets/img/animated-icon-weather/cloudy.svg',
	'09n': '../assets/img/animated-icon-weather/rainy-6.svg',
	'10n': '../assets/img/animated-icon-weather/rainy-6.svg',
	'11n': '../assets/img/animated-icon-weather/thunder.svg',
	'13n': '../assets/img/animated-icon-weather/snowy-6.svg',
	'50n': '../assets/img/animated-icon-weather/cloudy.svg'
}

export const error = {
	'0': 'Sorry, nothing was found for your request.',
	'1': 'Извините, по вашему запросу ничего не найдено.',
	'2': 'Выбачайце, па вашаму запыту нічога не знойдзена.'
}
