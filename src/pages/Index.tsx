import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');

  const availableTimes = [
    '10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'
  ];

  const services = [
    {
      title: 'Визит Деда Мороза и Снегурочки',
      description: 'Классический визит с подарками и новогодним поздравлением',
      price: '3500 ₽',
      duration: '30 мин',
      icon: 'Gift'
    },
    {
      title: 'Фотосессия с Дедом Морозом',
      description: 'Праздничная фотосессия для всей семьи',
      price: '2500 ₽',
      duration: '20 мин',
      icon: 'Camera'
    },
    {
      title: 'Новогодняя сказка',
      description: 'Интерактивное представление с песнями и играми',
      price: '4500 ₽',
      duration: '45 мин',
      icon: 'Music'
    },
    {
      title: 'Корпоративный визит',
      description: 'Поздравление коллектива в офисе или на празднике',
      price: '5000 ₽',
      duration: '60 мин',
      icon: 'Users'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Дети были в восторге! Дед Мороз был очень добрый и веселый.',
      date: '15 декабря 2024'
    },
    {
      name: 'Михаил Иванов',
      rating: 5,
      text: 'Отличная организация, пунктуальность и качественный сервис.',
      date: '20 декабря 2024'
    },
    {
      name: 'Елена Сидорова',
      rating: 5,
      text: 'Спасибо за незабываемый праздник! Все прошло идеально.',
      date: '22 декабря 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden relative">
      {/* Анимированные снежинки */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 10 + 10}px`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Навигация */}
      <nav className="relative z-10 p-6 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-400">🎅 Дед Мороз</h1>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-red-400 transition-colors">Услуги</a>
            <a href="#booking" className="hover:text-red-400 transition-colors">Бронирование</a>
            <a href="#reviews" className="hover:text-red-400 transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-red-400 transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="relative z-10 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent animate-fade-in">
            Волшебный Новый Год
          </h2>
          <p className="text-xl mb-8 text-blue-100 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Забронируйте визит настоящего Деда Мороза для незабываемого праздника
          </p>
          <div className="mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <img 
              src="/img/24643c96-4f29-4971-b519-a530f4d75683.jpg" 
              alt="Дед Мороз"
              className="w-96 h-96 mx-auto rounded-full object-cover border-8 border-red-400 shadow-2xl"
            />
          </div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-xl px-8 py-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Icon name="Calendar" className="mr-2" size={24} />
            Забронировать сейчас
          </Button>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="relative z-10 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-green-400">Наши услуги</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-green-400/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-blue-100">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      {service.duration}
                    </Badge>
                    <span className="text-2xl font-bold text-red-400">{service.price}</span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Календарь бронирования */}
      <section id="booking" className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-red-400">Выберите дату и время</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-red-400/30">
              <CardHeader>
                <CardTitle className="text-white text-center">Календарь</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border text-white"
                  disabled={(date) => date < new Date()}
                />
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-red-400/30">
              <CardHeader>
                <CardTitle className="text-white text-center">Доступное время</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`${
                        selectedTime === time 
                          ? "bg-red-600 hover:bg-red-700" 
                          : "border-white/30 text-white hover:bg-white/20"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                {selectedDate && selectedTime && (
                  <div className="mt-6 p-4 bg-green-600/20 rounded-lg">
                    <p className="text-center text-green-300">
                      Выбрано: {selectedDate.toLocaleDateString('ru-RU')} в {selectedTime}
                    </p>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                      Забронировать
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="relative z-10 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-green-400">Отзывы клиентов</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-green-400/30">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white text-lg">{review.name}</CardTitle>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-blue-200">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-red-400">Наши моменты</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg border-2 border-red-400/30 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <Icon name="Image" size={48} className="text-white/50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="relative z-10 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-green-400">Связаться с нами</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Телефон</h4>
              <p className="text-blue-100">+7 (999) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Email</h4>
              <p className="text-blue-100">dedmoroz@magic.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Адрес</h4>
              <p className="text-blue-100">Северный полюс, дом 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="relative z-10 py-8 bg-black/20 backdrop-blur-sm text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-200">© 2024 Дед Мороз. Все права защищены волшебством ✨</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;