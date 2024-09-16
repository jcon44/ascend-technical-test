<script>
    import { FilterContainer, Page, PageBody, CalendarSmallIcon, SexSmallIcon, RaceSmallIcon, Translate01SmallIcon, AgeSmallIcon, MapPin04SmallIcon, Link03SmallIcon, CreditCardSearchSmallIcon, HandHeartSmallIcon, MedicalSquareSmallIcon, MedicalCrossSmallIcon, MedicalCircleSmallIcon, ProfilePlusSmallIcon, Edit04SmallIcon, UserEditSmallIcon, Building08SmallIcon, SearchSmallIcon, NotificationTextSmallIcon, StarEmptySmallIcon } from '$lib/index.js'

    const filters = [
        { icon: CalendarSmallIcon, label: ['label'], tooltip: 'Tip' },
        { icon: SexSmallIcon, label: ['longer label'], tooltip: 'Tip' },
        { icon: RaceSmallIcon, label: ['item one', 'item two'], tooltip: 'Tip Range' },
        { icon: Translate01SmallIcon, label: ['why?'], tooltip: 'Tip' },
        { icon: AgeSmallIcon, label: ['what?'], tooltip: 'Tip' },
        { icon: MapPin04SmallIcon, label: ['how?'], tooltip: 'Tip' },
        { icon: Link03SmallIcon, label: ['attached'], tooltip: 'This Tip' },
        { icon: CreditCardSearchSmallIcon, label: ['billing'], tooltip: 'Yay Billing' },
        { icon: HandHeartSmallIcon, label: ['idrkwgh', 'crazy'], tooltip: 'Tip' },
        { icon: MedicalSquareSmallIcon, label: ['woof'], tooltip: 'Tip' },
        { icon: MedicalCrossSmallIcon, label: ['health'], tooltip: 'Tip' },
        { icon: MedicalCircleSmallIcon, label: ['diag 1', 'diag2', 'diag 3', 'diag 4'], tooltip: 'Tip' },
        { icon: ProfilePlusSmallIcon, label: ['users'], tooltip: 'Tip' },
        { icon: UserEditSmallIcon, label: ['edit?'], tooltip: 'Tip' },
        { icon: Edit04SmallIcon, label: ['Pen Squiggle'], tooltip: 'Tip' },
        { icon: Building08SmallIcon, label: ['Jail'], tooltip: 'Tip' },
        { icon: SearchSmallIcon, label: ['search'], tooltip: 'Search' },
        { icon: NotificationTextSmallIcon, label: ['notification'], tooltip: 'Tip' },
        { icon: StarEmptySmallIcon, label: ['law enforcement'], tooltip: 'Tip'}
    ]
</script>

<Page>
    <PageBody size="full">
        <h1>Filters</h1>
        <div>
            <FilterContainer {filters} />
        </div>
    </PageBody>
</Page>