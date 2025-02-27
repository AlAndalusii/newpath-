interface StatusIndicatorProps {
  status: 'active' | 'expired' | 'ending-soon'
}

export default function StatusIndicator({ status }: StatusIndicatorProps) {
  const statusStyles = {
    active: {
      dot: 'bg-green-500',
      text: 'text-green-700',
      bg: 'bg-green-50',
      label: 'Active'
    },
    expired: {
      dot: 'bg-red-500',
      text: 'text-red-700',
      bg: 'bg-red-50',
      label: 'Expired'
    },
    'ending-soon': {
      dot: 'bg-yellow-500',
      text: 'text-yellow-700',
      bg: 'bg-yellow-50',
      label: 'Ending Soon'
    }
  }

  const currentStatus = statusStyles[status]

  return (
    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${currentStatus.bg} ${currentStatus.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${currentStatus.dot} mr-1.5`}></span>
      {currentStatus.label}
    </span>
  )
} 