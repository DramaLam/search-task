import Button from './Button/Button'

export default function TabsSection({ active, onChange } : {active: string, onChange: (current: any) => void}) {
  return (
    <section style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center'}}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Поиск по mock данным
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