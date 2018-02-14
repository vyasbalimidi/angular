class Dmu {
    requestor_pass: string;
    description: string;
    long_description: string;
    project_number_pass: string;

    aei: string;
    ahb: string;
    kaa: string;
    taa: string;
    zeus: string;

    nm_kg_cg: string;
    reason: string;
    together_with_eco: string;
    consequence_non_implementation: string;

    target_date: Date;
    proposed_doc_date: Date;
    proposed_release_date: Date;
}

class Smaragd {
    release_state: string;

    introduction_advice: string;
    introduction_advice_by_locale: string;
    detailed_advice: string;

    priority: string;
    priority_by_locale: string;

    cancellation_date: Date;
    extension_date: Date;
    cancellation_order: string;

    remark: string;
    reason: string;
    together_with_eco: string;

    last_update: Date;
}

class Signatures {
    title: string;
    title_by_locale: string;
    created_date: string;

    user_id: string;
    user_name: string;
    department: string;
}

export class CoverPage {
    dmu: Dmu;
    smaragd: Smaragd;
    signatures: Signatures[];

    eco_number: string;
    status: string;
    created_date: Date;
    engineering_effectivity_date: Date;
    revision_state: string;
    priority: string;
    priority_by_locale: string;
    detailed_advice: string;
    cancellation_order: string;
    comments_designer: string;
    comments_data_manager: string;
    stop_notice: string;
    stop_notice_by_locale: string;
    stop_notice_number: string;
    emission: number;
    type_approval_regulation: number;
    technical_data_affected: number;
    special_tool: number;
    technical_routing_letter: number;
    last_updated_bom_db: Date;
    status_review: string;
}