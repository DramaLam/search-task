import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Главная
      </Button>

      <Button
        isActive={active === 'resource'}
        onClick={() => onChange('resource')}
      >
        Список из стороннего ресурса
      </Button>

      <Button
        isActive={active === 'resources'}
        onClick={() => onChange('resources')}
      >
        Поиск по ссылке
      </Button>
    </section>
  )
}