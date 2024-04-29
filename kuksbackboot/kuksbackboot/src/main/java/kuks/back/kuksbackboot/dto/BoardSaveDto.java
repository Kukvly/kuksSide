package kuks.back.kuksbackboot.dto;

import kuks.back.kuksbackboot.db.BoardEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class BoardSaveDto {
    private Long idx;
    private String title;
    private String contents;
    private String createdBy;

    public BoardEntity toEntity() {
        return BoardEntity.builder()
                .idx(idx)
                .title(title)
                .contents(contents)
                .createdBy(createdBy)
                .build();
    }
}
