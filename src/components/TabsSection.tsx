import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Рабочая поисковая строка
      </Button>

      <Button
        isActive={active === 'resource'}
        onClick={() => onChange('resource')}
      >
        Поиск по пользователям
      </Button>

      <Button
        isActive={active === 'resources'}
        onClick={() => onChange('resources')}
      >
        Поиск по запросу
      </Button>
    </section>
  )
}